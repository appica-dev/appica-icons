<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 1 0 4.24 4.245M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.703 4.709M12 2v2m0 16v2m8-10h2M2 12h2M3 3l18 18\"/>";
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
