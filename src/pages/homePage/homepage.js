import {Layout} from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/content/content";


const {Header,Content} = Layout;


function Home() {


  return (
      <Layout>
        <Header style={{ backgroundColor: "#FCD91F", height: 100 }}>
          <HeaderBanner />
        </Header>
        <Content style={{ backgroundColor: "#FCD91F"}}>
          <ContextBody />
        </Content>

      </Layout>
  );
}

export default Home;