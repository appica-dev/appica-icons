<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 4.57v14.868m-8.5-7.434h17M18.163 20.5l-12.75-1.593C4.35 18.801 3.5 17.951 3.5 16.889V7.12c0-1.062.85-1.912 1.912-2.018l12.75-1.593c1.276-.106 2.338.85 2.338 2.018v12.85c0 1.274-1.169 2.23-2.337 2.018z\"/>";
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
