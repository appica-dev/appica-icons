<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 18.992h-4a8 8 0 0 1-5.657-2.342A8 8 0 0 1 2 10.997V6h4v4.997a3.996 3.996 0 0 0 4 3.998V6h4v4.497h.03A4.53 4.53 0 0 0 18 6.004h4l-.342 1.71A6.85 6.85 0 0 1 18 12.5a5.34 5.34 0 0 1 3.566 4.108L22 18.996h-4a4.527 4.527 0 0 0-3.97-4.493V19z\"/>";
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
