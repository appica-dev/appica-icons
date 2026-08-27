<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M22 9 12 5 2 9l10 4zm0 0v6M6 10.6V16c0 .796.632 1.559 1.757 2.121S10.41 19 12 19s3.117-.316 4.243-.879C17.368 17.56 18 16.796 18 16v-5.4\"/>";
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
