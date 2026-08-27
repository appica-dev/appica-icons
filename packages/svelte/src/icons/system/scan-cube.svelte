<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.75 9.964L12 12m0 0L8.25 9.964M12 12v4.071M3 7V5a2 2 0 0 1 2-2h2M3 17v2a2 2 0 0 0 2 2h2M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2M8.504 9.426l3-1.714a1 1 0 0 1 .992 0l3 1.714a1 1 0 0 1 .504.868v3.411a1 1 0 0 1-.504.868l-3 1.715a1 1 0 0 1-.992 0l-3-1.715A1 1 0 0 1 8 13.705v-3.41a1 1 0 0 1 .504-.869z\"/>";
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
