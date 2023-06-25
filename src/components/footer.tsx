import s from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="o-container">
        <div className={s.content}>
          <div className="small">&copy; { new Date().getFullYear() } Bekah McDonald</div> 
          <div className="xsmall">Built with <a href="https://nextjs.org/" rel="noreferrer" target="_blank">Next.js</a> and the WordPress REST API</div>
        </div> 
      </div>
    </footer>
  );
}