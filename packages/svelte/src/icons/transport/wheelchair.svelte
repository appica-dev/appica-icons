<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6M3 16a5 5 0 1 0 10 0 5 5 0 0 0-10 0\"/>";
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
