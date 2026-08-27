<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 19H5a2 2 0 0 1-2-2V7m0 0a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 7l8 5.345M21 7v4m0-4-6 4m-1 10v-4a2 2 0 0 1 4 0v4m-4-2h4m3-4v6\"/>";
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
