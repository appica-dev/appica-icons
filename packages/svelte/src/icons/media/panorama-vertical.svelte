<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.438 4.338q-2.892 7.658 0 15.317A1.002 1.002 0 0 1 17.506 21H6.528c-.69 0-1.205-.692-.96-1.34q2.892-7.66 0-15.321A.993.993 0 0 1 6.501 3h11.006a.993.993 0 0 1 .933 1.338z\"/>";
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
