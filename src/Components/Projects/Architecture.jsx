import { motion } from "framer-motion";

function Architecture({ project }) {

  return (

    <section className="architecture">

      <div className="architecture-heading">

      

       
      </div>

      <motion.div

        className="architecture-flow"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.7
        }}

      >
           
         <h2>
          System Architecture
        </h2>

        {/* CLIENT */}

        <div className="architecture-box">
          <div className="architecture-cards-sec">
            
        <div className="architecture-card">

          <i className="fa-brands fa-flutter"></i>

          <h4>

            {project.architecture.client}

          </h4>

          

        </div>

        

        {/* SERVER */}

        <div className="architecture-card">

          <i className="fa-solid fa-server"></i>

          <h4>

            {project.architecture.server}

          </h4>

        

        </div>

        

        {/* DATABASE */}

        <div className="architecture-card">

          <i className="fa-solid fa-database"></i>

          <h4>

            {project.architecture.database}

          </h4>

          

        </div>

          </div>

       



        {/* PANELS */}

        <div className="architecture-panels">

          {project.architecture.panels.map((panel,index)=>(

            <motion.div

              key={index}

              className="panel-card"

              whileHover={{
                y:-8,
                scale:1.05
              }}

            >

              <i className="fa-brands fa-react"></i>

              <h4>

                {panel}

              </h4>

            </motion.div>

          ))}

        </div>


        </div>

      </motion.div>

    </section>

  );

}

export default Architecture;