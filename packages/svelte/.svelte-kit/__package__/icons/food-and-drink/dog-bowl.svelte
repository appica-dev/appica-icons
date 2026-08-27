<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 15 3.587-3.586A2 2 0 1 0 19 8a2 2 0 1 0-3.415 1.415L10 15l-3.587-3.586A2 2 0 1 1 5 8a2 2 0 1 1 3.414 1.415L12 13m-9 7h18c-.174-1.671-.046-3.345-2-5H5q-2 1.5-2 5\"/>";
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
