import Header from './Header'

export function MainLayout({ children }) {
return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        { children }
      </main>
      <style jsx gloabl>{`
        nav { 
          color: red; 
        }
      `}</style>
    </>
  )
}