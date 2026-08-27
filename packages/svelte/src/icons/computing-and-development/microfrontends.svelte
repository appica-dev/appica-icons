<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.5 7.5 12 12l4.5-4.5M6 16v-4m0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m12 0v-4m0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
