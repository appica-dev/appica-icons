<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11.106 18.79-1 .992a4.159 4.159 0 0 1-6.038-5.715l.157-.166L12.507 5.5l1.5 1.5 3.45-3.391a2.08 2.08 0 0 1 3.057 2.815l-.116.126-3.39 3.45 1.5 1.5-3.669 3.617M10.501 7.5l6 6m-5.5 4.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
