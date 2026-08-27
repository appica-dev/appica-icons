<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0v-5h9m-5 6h8m4 0h2v-6m0 0a5 5 0 0 0-5-5h-1m6 5h-4.5L15 7m0 0h-3v11m-8-6V6m0 0 18-3v2M4 6l4 2v4m7 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
