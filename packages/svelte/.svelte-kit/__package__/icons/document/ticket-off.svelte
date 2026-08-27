<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 5v2m0 10v2M9 5h10a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3m-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2M3 3l18 18\"/>";
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
