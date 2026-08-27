<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0 0 2-6h6.5l-5.264-4 2.044-6.28L12 8.5 6.72 4.72 8.776 11 3.5 15H10z\"/>";
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
