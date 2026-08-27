<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18.72 11.985-5.888-9.539a.998.998 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a2 2 0 0 0 1.789 0l.149-.074M12.002 2v20m4-3h6m-3-3v6\"/>";
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
