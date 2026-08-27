<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9 15-1-3 4-2m0 0 4 1h3.5M12 10v7m-4 3h7l1-4 4-2m-2 6h3M3 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0m8-13a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
