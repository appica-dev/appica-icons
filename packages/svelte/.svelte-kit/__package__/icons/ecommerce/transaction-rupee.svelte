<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12h-6 1a3 3 0 0 1 0 6h-1l3 3m-3-6h6M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h8M7 5v8a3 3 0 0 0 3 3h1m4-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
