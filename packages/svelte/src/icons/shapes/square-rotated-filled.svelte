<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.624 2.196 2.196 9.624c-1.261 1.26-1.261 3.491 0 4.752l7.428 7.428c1.26 1.261 3.491 1.261 4.752 0l7.428-7.428c1.261-1.26 1.261-3.491 0-4.752l-7.428-7.428c-1.26-1.261-3.491-1.261-4.752 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
