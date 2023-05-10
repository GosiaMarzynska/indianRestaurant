import classes from './PageContent.module.css';
import Footer from './Footer';
import Contact from './Contact';
function PageContent({children }) {
  return (
    <div className={classes.content}>
          {children}
          <Contact/>
          <Footer/>
    </div>
  );
}

export default PageContent;