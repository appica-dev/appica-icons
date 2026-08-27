<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m20.5 16.5-4.344-9.106C14.343 3.798 13.436 2 12 2S9.657 3.798 7.844 7.394L3.5 16.5M21 18c0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4 9-1.79 9-4\"/>";
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
