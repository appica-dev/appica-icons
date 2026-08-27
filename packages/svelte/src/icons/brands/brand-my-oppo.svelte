<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9 11 3 3 3-3m3.316-6H5.684L2.266 9.019a1.09 1.09 0 0 0 .02 1.447L11.998 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z\"/>";
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
