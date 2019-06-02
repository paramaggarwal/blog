import CMS from 'netlify-cms'

// import IndexPagePreview from './preview-templates/IndexPagePreview'
// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
