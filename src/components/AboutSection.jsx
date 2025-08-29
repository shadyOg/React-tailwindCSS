import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Tech Enthusiast
          </h3>


          <p className="text-muted-foreground">
            As a student and Web Enthusiast, I specialize in creating
            responsive, accessible and fast web applications 
            using modern technologies.
          </p>

          <p className="text-muted-foreground">
            I'm passionate about creating elegant solutions to complex 
            problems, and I'm constantly learning new technologies and techniques to 
            stay at the forefront of the ever-evolving web landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4  pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {" "}
              Get In Touch
            </a>

            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover bg-primary/4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div >
              <div className="text-left">
                <h4 className="font-semibold">Web Development</h4>
                <p className="text-muted-foreground">
                  Using modern and up to date tools to build websites 
                  and efficient web apps for clients.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover bg-primary/4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full  bg-primary/10">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-muted-foreground">
                  Worked with a team for my software engineering project
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover bg-primary/4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full  bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Work Experience</h4>
                <p className="text-muted-foreground">
                  As a student I built projects for fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}