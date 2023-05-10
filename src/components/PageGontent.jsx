import classes from './PageContent.module.css';
import Footer from './Footer';
function PageContent({children }) {
  return (
    <div className={classes.content}>
          {children}
          <Footer/>
    </div>
  );
}

export default PageContent;