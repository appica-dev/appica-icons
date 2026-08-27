<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.001 18a4.82 4.82 0 0 1-3.326-1.318A4.4 4.4 0 0 1 2.297 13.5c0-1.194.496-2.338 1.378-3.182A4.82 4.82 0 0 1 7 9c.295-1.313 1.157-2.467 2.397-3.207a6 6 0 0 1 2.025-.749 6.2 6.2 0 0 1 2.19.006c.722.131 1.408.39 2.02.76.611.37 1.136.844 1.543 1.397.408.552.69 1.172.832 1.823.142.65.14 1.32-.007 1.97h1a3.5 3.5 0 1 1 0 7h-1m-9-3 3-3m0 0 3 3m-3-3v9\"/>";
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
