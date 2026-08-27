<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018m6.044-.372a2.101 2.101 0 0 1 2.97 2.97L18 22h-3v-3z\"/>";
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
