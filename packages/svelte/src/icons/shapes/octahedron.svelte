<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 12a.98.98 0 0 1 .296-.703l8.845-8.949a1.233 1.233 0 0 1 1.718 0l8.845 8.948a.98.98 0 0 1 0 1.407l-8.845 8.949a1.234 1.234 0 0 1-1.718.001l-8.845-8.949A.99.99 0 0 1 2 12.001m0 0c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l8.845-2.632c.195-.07.294-.156.296-.243M12 2.12v19.76\"/>";
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
