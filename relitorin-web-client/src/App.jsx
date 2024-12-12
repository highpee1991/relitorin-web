import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/globalStyle/GlobalStyle";
import PageNotFound from "./components/pages/PageNotFound";
import WhoWeAre from "./components/pages/aboutUs/WhoWeAre";
import VisionMissionValue from "./components/pages/aboutUs/VisionMissionValue";
import OurLocation from "./components/pages/aboutUs/OurLocation";
import Gallery from "./components/pages/aboutUs/Gallery";
import ElectricalsSolutions from "./components/pages/whatwedo/electricalSolution/ElectricalsSolutions";
import HeavyEquipments from "./components/pages/whatwedo/heavyEquipment/HeavyEquipments";
import InfrastructureCommunication from "./components/pages/whatwedo/InfrastructureCommunication";
import SpecializedIindustrialSolutions from "./components/pages/whatwedo/SpecializedIindustrialSolutions";
import SafetySecurity from "./components/pages/whatwedo/SafetySecurity";
import EnvironmentalSolutions from "./components/pages/whatwedo/EnvironmentalSolutions";
import Training from "./components/pages/services/Training";
import Engineering from "./components/pages/services/Engineering";
import Installation from "./components/pages/services/Installation";
import MaintenanceSupport from "./components/pages/services/MaintenanceSupport";
import OilGas from "./components/pages/industries/OilGas";
import PowerEnergy from "./components/pages/industries/PowerEnergy";
import ConstructionInfrastructure from "./components/pages/industries/ConstructionInfrastructure";
import TransportationLogistics from "./components/pages/industries/TransportationLogistics";
import AgricultureFarming from "./components/pages/industries/AgricultureFarming";
import CompetitiveAdvantages from "./components/pages/whyChooseUs/CompetitiveAdvantages";
import QualityAssurance from "./components/pages/whyChooseUs/QualityAssurance";
import CustomizationFlexibility from "./components/pages/whyChooseUs/CustomizationFlexibility";
import CustomerCentricApproach from "./components/pages/whyChooseUs/CustomerCentricApproach";
import TestimonialsCaseStudies from "./components/pages/whyChooseUs/TestimonialsCaseStudies";
import TelecommunicationsIT from "./components/pages/industries/TelecommunicationsIT";
import InventoryList from "./components/pages/inventory/InventoryList";
import ManufacturingIndustrial from "./components/pages/industries/ManufacturingIndustrial";
import ProductsOverview from "./components/pages/products/ProductsOverview";
import RelitorinProducts from "./components/pages/products/RelitorinProducts";
import MedicalEquipmentSupplies from "./components/pages/products/MedicalEquipmentSupplies";
import TexasInventoryDetails from "./components/ui/texasInventaryCarousal/TexasInventoryDetails";
import ContactUs from "./components/ui/contacts/ContactUs";
import Texasinventories from "./components/pages/inventory/texasinventory/Texasinventories";
import PipesValvesFittings from "./components/pages/whatwedo/pipesValvesFittings/PipesValvesFittings";
import DropDownSubCategory from "./components/ui/whatWeDo/DropDownSubCategory";
import categories from "./components/pages/whatwedo/pipesValvesFittings/pipesValvesFittingsData";
import electricalData from "./components/pages/whatwedo/electricalSolution/electricalData";

function App() {
  return (
    <>
      <GlobalStyles inititalIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            {/* link with id */}
            <Route
              path="texasinventory/:texasId"
              element={<TexasInventoryDetails />}
            />

            {/* //about us */}
            <Route path="whoweare" element={<WhoWeAre />} />
            <Route
              path="vissionmissionvalue"
              element={<VisionMissionValue />}
            />
            <Route path="ourlocation" element={<OurLocation />} />
            <Route path="gallery" element={<Gallery />} />

            {/* // what we do */}
            <Route
              path="pipesvalvesfitting"
              element={<PipesValvesFittings />}
            />
            <Route
              path="pipes/:categoryId"
              element={<DropDownSubCategory categories={categories} />}
            />
            <Route
              path="electrical/:categoryId"
              element={<DropDownSubCategory categories={electricalData} />}
            />
            <Route
              path="electricalssolutions"
              element={<ElectricalsSolutions />}
            />
            <Route
              path="heavyequipmentvehicles"
              element={<HeavyEquipments />}
            />
            <Route
              path="infrastructurecommunication"
              element={<InfrastructureCommunication />}
            />
            <Route
              path="specializedindustrialsolutions"
              element={<SpecializedIindustrialSolutions />}
            />
            <Route path="safetysecurity" element={<SafetySecurity />} />
            <Route
              path="environmentalsolutions"
              element={<EnvironmentalSolutions />}
            />

            {/* services */}
            <Route path="training" element={<Training />} />
            <Route path="engineering" element={<Engineering />} />
            <Route path="installation" element={<Installation />} />
            <Route path="mentainancesupport" element={<MaintenanceSupport />} />

            {/* industries */}
            <Route path="oilandgas" element={<OilGas />} />
            <Route path="powerenergy" element={<PowerEnergy />} />
            <Route
              path="constructioninfrastructure"
              element={<ConstructionInfrastructure />}
            />
            <Route
              path="telecommunications"
              element={<TelecommunicationsIT />}
            />
            <Route
              path="manufacturingidustrial"
              element={<ManufacturingIndustrial />}
            />
            <Route
              path="transportationlogistics"
              element={<TransportationLogistics />}
            />
            <Route path="safetysecurity" element={<SafetySecurity />} />
            <Route
              path="environmentalsolutions"
              element={<EnvironmentalSolutions />}
            />
            <Route path="agriculturefarming" element={<AgricultureFarming />} />

            {/*why choose us  */}
            <Route
              path="competitiveadvantages"
              element={<CompetitiveAdvantages />}
            />
            <Route path="qualityassurance" element={<QualityAssurance />} />
            <Route
              path="customizationflexibility"
              element={<CustomizationFlexibility />}
            />
            <Route
              path="customercentricapproach"
              element={<CustomerCentricApproach />}
            />
            <Route
              path="testimonialsscsestudies"
              element={<TestimonialsCaseStudies />}
            />

            {/* products */}
            <Route path="productsoverview" element={<ProductsOverview />} />
            <Route path="relitorinproducts" element={<RelitorinProducts />} />
            <Route
              path="medicalequipmentsupplies"
              element={<MedicalEquipmentSupplies />}
            />

            {/* inventory */}
            <Route path="inventorylist" element={<InventoryList />} />
            <Route path="texasinventories" element={<Texasinventories />} />

            {/*  */}
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
