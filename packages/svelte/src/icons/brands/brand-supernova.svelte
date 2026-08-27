<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 15h.5c3.038 0 5.5-1.343 5.5-3s-2.462-3-5.5-3c-1.836 0-3.462.49-4.46 1.245M9 9h-.5C5.462 9 3 10.343 3 12s2.462 3 5.5 3c1.844 0 3.476-.495 4.474-1.255M15 9v-.5C15 5.462 13.657 3 12 3S9 5.462 9 8.5c0 1.833.49 3.457 1.241 4.456M9 15v.5c0 3.038 1.343 5.5 3 5.5s3-2.462 3-5.5c0-1.842-.494-3.472-1.252-4.47M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
