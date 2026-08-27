<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 17.522v-6.534h.5l4 6.03h.5v-6.532M4.5 5.46 7 7.973m0 0 13-1.005M7 7.973v12.564m12.077-.431-11.53.891a1 1 0 0 1-.876-.399L4.2 17.288c-.13-.175-.2-.386-.2-.604V5.888a.998.998 0 0 1 .923-1.002l11.389-.88c.446-.034.89.082 1.262.332l1.535 1.028A2 2 0 0 1 20 7.038v12.066a.998.998 0 0 1-.923 1.002\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
