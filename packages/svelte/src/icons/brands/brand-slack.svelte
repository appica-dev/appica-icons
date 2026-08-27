<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12V6m0 6h6m-6 0v6m0-6H6m6-6a2 2 0 1 1 4 0v6m-4-6a2 2 0 1 0-2 2m6 2a2 2 0 1 1 2 2m0 0a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2m0 0a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2m0 0a2 2 0 1 1 0-4h6\"/>";
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
