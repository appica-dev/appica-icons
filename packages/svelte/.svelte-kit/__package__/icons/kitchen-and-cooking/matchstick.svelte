<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-9 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z\"/>";
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
