import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { ElMenu, ElMenuItem } from "element-plus";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const active = ref("home");
    const route = useRoute();

    return {
      active,
      route,
    };
  },
  render() {
    const { active, route } = this;

    console.log("name => ", route.name);

    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <ElMenu
          mode="vertical"
          defaultActive={active}
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          router
        >
          <ElMenuItem
            index="home"
            route={{
              path: "/",
            }}
          >
            Home
          </ElMenuItem>
          <ElMenuItem
            index="page2"
            route={{
              path: "/page2",
            }}
          >
            Page2
          </ElMenuItem>
          <ElMenuItem
            index="react"
            route={{
              path: "/react",
            }}
          >
            React 子应用
          </ElMenuItem>
          <ElMenuItem
            index="vue"
            route={{
              path: "/vue",
            }}
          >
            Vue 子应用
          </ElMenuItem>
        </ElMenu>
        <RouterView v-show={route.name} />
        <section v-show={!route.name} id="frame"></section>
      </div>
    );
  },
});
