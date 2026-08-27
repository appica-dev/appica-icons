<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.131 17.009 18.03 17M12 3a4.02 4.02 0 0 1 3.93 3.151 4.04 4.04 0 0 1 3.051.392c.925.528 1.6 1.4 1.88 2.424a3.98 3.98 0 0 1-.395 3.037 4.02 4.02 0 0 1-2.436 1.87V21H5.97v-7.126a4.03 4.03 0 0 1-2.437-1.87A3.987 3.987 0 0 1 5.02 6.541a4.04 4.04 0 0 1 3.052-.391 4 4 0 0 1 1.405-2.265A4.03 4.03 0 0 1 12 3\"/>";
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
