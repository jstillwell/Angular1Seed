using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KDEnterprises.Startup))]
namespace KDEnterprises
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
