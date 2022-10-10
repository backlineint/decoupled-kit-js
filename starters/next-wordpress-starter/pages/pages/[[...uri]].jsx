import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import { PageGridItem } from '../../components/grid';
import { withGrid } from '@pantheon-systems/nextjs-kit';
import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';
import { Paginator } from '@pantheon-systems/nextjs-kit';
import { useRouter } from 'next/router';
import { ContentWithImage } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu } from '../../lib/Menus';
import { getLatestPages, getPageByUri } from '../../lib/Pages';

export default function PageHandler({ menuItems, pages }) {
	const router = useRouter();
	const { uri = [] } = router.query;

	// render page list if multiple pages were passed
	if (pages.length !== undefined) {
		return (
			<PageListTemplate
				menuItems={menuItems}
				pages={pages}
				pageNum={!isNaN(uri[0]) ? uri[0] : undefined}
			/>
		);
	} else {
		return <PageTemplate menuItems={menuItems} page={pages} />;
	}
}

export function PageListTemplate({ menuItems, pages, pageNum }) {
	const PagesGrid = withGrid(PageGridItem);

	const RenderCurrentItems = ({ currentItems }) => {
		return (
			<PagesGrid contentType="pages" data={currentItems} pageNum={pageNum} />
		);
	};

	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress Demo"
				description="Generated by create next app."
			/>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<PageHeader title="Pages" />
					<Paginator
						data={pages}
						itemsPerPage={10}
						routing
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export function PageTemplate({ menuItems, page }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress Demo"
				description="Generated by create next app."
			/>
			<ContentWithImage
				title={page.title}
				content={page.content}
				date={new Date(page.date).toLocaleDateString('en-US', {
					timeZone: 'UTC',
				})}
				imageProps={
					page.featuredImage
						? {
								src: page.featuredImage?.node.sourceUrl,
								alt: page.featuredImage?.node.altText,
						  }
						: undefined
				}
			/>
		</Layout>
	);
}

export async function getServerSideProps({ params: { uri }, res }) {
	const menuItems = await getFooterMenu();
	let pages = await getLatestPages();

	if (uri !== undefined) {
		// check if a specific page was requested
		pages = await getPageByUri(uri[uri.length - 1]);
		if (pages === null) {
			pages = await getLatestPages();
		}
	}

	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			pages,
		},
	};
}
