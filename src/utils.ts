function generateBreadcrumbs(url: string): string[] {
    const breadcrumbs: string[] = [];
    const urlSegments: string[] = url.split('/').filter(segment => segment !== '');
  
    for (let i = 0; i < urlSegments.length; i++) {
      const breadcrumb = urlSegments.slice(0, i + 1).join('/');
      breadcrumbs.push(breadcrumb);
    }
  
    return breadcrumbs;
  }
  
  export { generateBreadcrumbs }
  