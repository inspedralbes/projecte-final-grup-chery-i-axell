# Documentació frontend

[Link a la documentació](http://documentacio-front-grup2-daw.alumnes.inspedralbes.cat/modules/AppModule.html)

# Estructura del projecte (estructura típica d'<span style="color:#DC143C">Angular</span>)
* web/frontEnd/src/app
    *   /component x *(Carpeta que conté tot el codi sobre un component)*
        *   componet_x.component.<span style="color:#0096FF">ts</span> *(Codi typescript)*
        *   component_x.component.<span style="color:#89CFF0">css</span> *(Css del component)*
        *   component_x.component.<span style="color:#FF5733">html</span> *(HTML del component)*
        *   component_x.component.<span style="color:#FFC300">spec.ts</span> *(Tests- No implementat)*  
    *   /model *(Clases i interficies )*
        *   interface_x.<span style="color:#0096FF">ts</span>
    *   /services  *(Aqui es troben els serveis de la nostra aplicació. Són els  encarregats de l'accès a les dades, tenen els mètodes per obtenir/eliminar dades que es consumiràn a tota l'aplicació )*
        *   service_x.<span style="color:#0096FF">ts</span>
    *   /shared *(Aqui es troben els Guars. Middlewares que s'executen a l'hora de carregar,sortir de rutes entre altres..)*
        *   guard_x.<span style="color:#0096FF">ts</span>
