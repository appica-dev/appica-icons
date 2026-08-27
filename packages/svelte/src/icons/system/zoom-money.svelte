<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21 21-6-6m-3-8H9.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H8m2 0v1m0-8v1m-7 3a7 7 0 1 0 14 0 7 7 0 0 0-14 0\"/>";
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
