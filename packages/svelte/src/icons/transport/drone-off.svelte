<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.002 14h4l3.5 3.5m-7.5-3.5v-4l-3.5-3.5m3.5 7.5-3.5 3.5M9.959 5.95a3.5 3.5 0 0 0-2.917-2.91m-3.02.989a3.5 3.5 0 0 0 1.98 5.936m8 .035 3.5-3.5m.5 3.465A3.5 3.5 0 1 0 14.036 6m0 12a3.5 3.5 0 0 0 5.937 1.98m.987-3.026a3.5 3.5 0 0 0-2.918-2.913m-12.04-.006A3.5 3.5 0 1 0 9.968 18M3.002 3l18 18\"/>";
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
