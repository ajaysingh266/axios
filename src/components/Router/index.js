function RouteIndex(){
return(
<>
  <BrowserRouter>
  <Routes>
  <Route to="/" element={<Home/>}/>
<Route to="/about" element={<About/>}/>
  <Route to="/*" element={<Page404/>}/>
     <Route to="/user/:name" element={<User/>}/>
    <Route to="/*" element={<Navigate to ="/"/>}/>
  
  </Routes>
  </BrowserRouter>
</>
)
}
