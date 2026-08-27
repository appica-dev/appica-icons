<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.1 15h11.794M8.998 3h5.997m-1 0v7.342a6 6 0 0 1 3.956 4.921A6 6 0 0 1 15.313 21H8.681a6 6 0 0 1-1.361-8.762 6 6 0 0 1 2.678-1.898V3z\"/>";
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
