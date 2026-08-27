<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 0 0 12.73 12.726m-7.085-7.059a1 1 0 1 0 1.419 1.41M14 10l2-2m-9 4c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7 12 7M3 3l18 18\"/>";
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
