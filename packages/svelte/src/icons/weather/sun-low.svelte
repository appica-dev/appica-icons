<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 11.995h.01M11.995 4v.01m7.995 7.985H20m-8.005 7.995V20M6.309 6.309l-.01-.01m11.402.01-.01-.01m0 11.392.01.01M6.3 17.691l.01.01m1.688-5.706a3.998 3.998 0 1 0 7.996 0 3.998 3.998 0 0 0-7.996 0\"/>";
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
