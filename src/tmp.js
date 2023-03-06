function Main() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* index代表此路由中的預設子頁 */}
            <Route index element={<Home />} />
            {/* 其它子頁面 */}
            <Route path='page1' element={<Page1 />} />
            <Route path='page2' element={<Page2 />} />
            
            {/* 404未找到的頁面路由，需放在最下方 */}
            <Route path='*' element={<NoFound />} />
          </Route>
          <Route path='page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    )
  }