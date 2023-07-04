import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import ContactUs from "./Pages/ContactUs"
import OurPartners from "./Pages/OurPartners"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/LogIn"
import CompetitionandAwards from "./Pages/CompetitonandAwards"
import DIYSchoolBeautification from "./Pages/DIYSchoolBeautification"
import DigitalGames from "./Pages/DigitalGames"
import FrequentlyAskedQuestions from "./Pages/FrequentlyAskedQuestions"
import FeedBack from './Pages/FeedBack';
import './App.css';
import Resources from './Pages/Resources';
import OrderABin from './Pages/OrderABin';

function App() {
  return (
    <div className="">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/ourpartners' element={<OurPartners/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/competitionsandawards' element={<CompetitionandAwards/>}/>
  <Route path='/diyschoolbeautification' element={<DIYSchoolBeautification/>}/>
  <Route path='/digitalgames' element={<DigitalGames/>}/>
  <Route path='/resources' element={<Resources/>}/>
  <Route path='/frequentlyaskedquestions' element={<FrequentlyAskedQuestions/>}/>
  <Route path='/orderabin' element={<OrderABin/>}/>
  <Route path='/feedback' element={<FeedBack/>}/>
  <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  
    </div>
  );
}

export default App;
