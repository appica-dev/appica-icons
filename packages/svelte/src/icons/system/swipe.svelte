<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 16.572v2.42A2.01 2.01 0 0 1 12.991 21H5.01A2.01 2.01 0 0 1 3 18.991V11.01A2.01 2.01 0 0 1 5.009 9h2.954m1.204-4.489a2.04 2.04 0 0 1 2.496-1.441l7.826 2.097a2.04 2.04 0 0 1 1.441 2.496l-2.097 7.826a2.04 2.04 0 0 1-2.496 1.441L8.51 14.833a2.04 2.04 0 0 1-1.441-2.496z\"/>";
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
