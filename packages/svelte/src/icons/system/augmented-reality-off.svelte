<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 8V6c0-.557.228-1.061.595-1.424M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.558 0 1.062-.228 1.425-.596M12 12.5l.312-.195M12 12.5 8 10m4 2.5V17m2.769-6.231L16 10m0 0v2m0-2-4-2.5-.302.189M9.225 9.235 8 10m0 0v4.5l4 2.5m0 0 3.076-1.923M3 3l18 18\"/>";
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
