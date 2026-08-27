<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill-rule=\"evenodd\" d=\"M20.893 20.893a2.93 2.93 0 0 0 .857-2.068V5.175a2.925 2.925 0 0 0-2.925-2.925H5.175A2.925 2.925 0 0 0 2.25 5.175v13.65a2.925 2.925 0 0 0 2.925 2.925h13.65c.776 0 1.52-.308 2.068-.857M11.025 8.1a.975.975 0 1 0-1.95 0v7.8a.975.975 0 1 0 1.95 0v-2.925h1.95V15.9a.975.975 0 1 0 1.95 0V8.1a.975.975 0 1 0-1.95 0v2.925h-1.95z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
